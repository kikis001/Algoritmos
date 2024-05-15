# # complejidad logaritmica O(log n)
# def busqueda(lista):
#     apuntador_izquierdo = 0
#     apuntador_derecho = len(lista) - 1

#     while apuntador_izquierdo <= apuntador_derecho:
#         mitad = (apuntador_izquierdo+apuntador_derecho) // 2
#         if lista[mitad] == target:
#            return mitad
#         elif lista[mitad] < target:
#             apuntador_izquierdo = mitad + 1
#         else: 
#             apuntador_derecho = mitad - 1
#     return -1

# Importar las bibliotecas necesarias para poder hacer el juego
import pygame #Proporciona funciones para manejar gráficos, sonido, entrada del usuario etc.
import time #Se utiliza para pausar el juego durante un breve período y para configurar la velocidad del bucle principal del juego.
import random #Para generar números aleatorios.

# Inicializar Pygame
pygame.init()

# Configuración del juego
width = 800
height = 600
snake_block = 10
snake_speed = 15

# Definir colores utilizando valores RGB
white = (255, 255, 255)
black = (0, 0, 0)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)

# Inicializar la pantalla del juego
game_display = pygame.display.set_mode((width, height))
pygame.display.set_caption('Snake Game')  # Establecer el título del juego

# Reloj para controlar la velocidad del juego
clock = pygame.time.Clock()

# Definir un estilo de fuente para los mensajes en pantalla
font_style = pygame.font.SysFont(None, 50)


# Función para dibujar la serpiente en la pantalla
def our_snake(snake_block, snake_list):
    for x in snake_list:
        pygame.draw.rect(game_display, green, [x[0], x[1], snake_block, snake_block])


# Función para mostrar mensajes en pantalla
def message(msg, color):
    mesg = font_style.render(msg, True, color)
    game_display.blit(mesg, [width / 6, height / 3])


# Función principal del juego
def game_loop():
    game_over = False
    game_close = False

    # Inicialización de la serpiente
    x1 = width / 2
    y1 = height / 2
    x1_change = 0
    y1_change = 0

    snake_list = []
    length_of_snake = 0

    # Posición aleatoria de la comida
    foodx = round(random.randrange(0, width - snake_block) / 10.0) * 10.0
    foody = round(random.randrange(0, height - snake_block) / 10.0) * 10.0

    while not game_over:

        while game_close:
            # Pantalla de game over
            game_display.fill(white)
            message("Presiona C(Reintentar) Q(Salir)", red)
            our_snake(snake_block, snake_list)
            pygame.display.update()

            # Manejar eventos del teclado en la pantalla de game over
            for event in pygame.event.get():
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_q:
                        game_over = True
                        game_close = False
                    if event.key == pygame.K_c:
                        game_loop()

        # Manejar eventos del teclado para la dirección de la serpiente
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    x1_change = -snake_block
                    y1_change = 0
                elif event.key == pygame.K_RIGHT:
                    x1_change = snake_block
                    y1_change = 0
                elif event.key == pygame.K_UP:
                    y1_change = -snake_block
                    x1_change = 0
                elif event.key == pygame.K_DOWN:
                    y1_change = snake_block
                    x1_change = 0

        # Actualizar la posición de la serpiente
        x1 += x1_change
        y1 += y1_change

        # Dibujar en la pantalla
        game_display.fill(white)
        pygame.draw.rect(game_display, blue, [foodx, foody, snake_block, snake_block])
        our_snake(snake_block, snake_list)

        # Actualizar la posición de la comida y el tamaño de la serpiente
        if x1 == foodx and y1 == foody:
            foodx = round(random.randrange(0, width - snake_block) / 10.0) * 10.0
            foody = round(random.randrange(0, height - snake_block) / 10.0) * 10.0
            length_of_snake += 1

        # Mantener el tamaño de la serpiente
        if len(snake_list) > length_of_snake:
            del snake_list[0]

        # Verificar choques
        for segment in snake_list:
            if segment == [x1, y1] and segment!=snake_list[0]:
                game_close = True

        if x1 >= width or x1 < 0 or y1 >= height or y1 < 0:
            game_close = True

        snake_head = []
        snake_head.append(x1)
        snake_head.append(y1)
        snake_list.append(snake_head)

        # Actualizar la pantalla
        pygame.display.update()

        # Configurar la velocidad del juego
        clock.tick(snake_speed)

    # Finalizar Pygame y salir del programa
    pygame.quit()
    quit()


# Iniciar el bucle principal del juego
game_loop()