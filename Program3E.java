import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Program3E extends JFrame implements ActionListener {
    JLabel nombreLabel, montoLabel, sexoLabel, datosLabel;
    JTextField nombreInput, montoInput;
    JComboBox<String> sexoComboBox;
    JButton altaButton;

    public Program3E() {
        // Configuración de la ventana
        setTitle("Program3E");
        setSize(400, 200);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Creación de componentes
        nombreLabel = new JLabel("Nombre:");
        montoLabel = new JLabel("Monto inicial:");
        sexoLabel = new JLabel("Sexo:");
        datosLabel = new JLabel(""); // inicializado con cadena vacía

        nombreInput = new JTextField(10);
        montoInput = new JTextField(10);

        String[] sexos = {"Masculino", "Femenino"};
        sexoComboBox = new JComboBox<String>(sexos);
        sexoComboBox.setSelectedIndex(0);

        altaButton = new JButton("Dar de alta");
        altaButton.addActionListener(this);

        // Creación de paneles
        JPanel inputPanel = new JPanel();
        inputPanel.setLayout(new GridLayout(3, 2));
        inputPanel.add(nombreLabel);
        inputPanel.add(nombreInput);
        inputPanel.add(montoLabel);
        inputPanel.add(montoInput);
        inputPanel.add(sexoLabel);
        inputPanel.add(sexoComboBox);

        JPanel buttonPanel = new JPanel();
        buttonPanel.add(altaButton);

        // Agregar componentes a la ventana
        Container contentPane = getContentPane();
        contentPane.setLayout(new BorderLayout());
        contentPane.add(inputPanel, BorderLayout.CENTER);
        contentPane.add(buttonPanel, BorderLayout.SOUTH);
        contentPane.add(datosLabel, BorderLayout.NORTH);
    }

    public static void main(String[] args) {
        Program3E programa = new Program3E();
        programa.setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        String nombre = nombreInput.getText();
        double montoInicial = Double.parseDouble(montoInput.getText());
        String sexo = sexoComboBox.getSelectedItem().toString();

        // Actualización del JLabel solo cuando se hace clic en el botón
        String datos = "Nombre: " + nombre + " - Monto Inicial: " + montoInicial + " - Sexo: " + sexo;
        datosLabel.setText(datos);
    }
}