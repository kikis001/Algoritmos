import javax.swing.*;
import javax.swing.table.DefaultTableModel;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CuentaBancaria extends JFrame {

    private JLabel nombreLabel, montoLabel, sexoLabel, saldoLabel, importeLabel;
    private JTextField nombreTextField, montoTextField, saldoTextField, importeTextField;
    private JComboBox<String> sexoComboBox;
    private JButton altaButton, movimientoButton;
    private JCheckBox depositoCheckBox, retiroCheckBox;
    private JTable movimientosTable;
    private DefaultTableModel tableModel;

    private String nombre;
    private double monto;
    private String sexo;
    private double saldo;

    public CuentaBancaria() {
        super("Cuenta Bancaria");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(600, 400);

        // Crear componentes
        nombreLabel = new JLabel("Nombre:");
        montoLabel = new JLabel("Monto inicial:");
        sexoLabel = new JLabel("Sexo:");
        saldoLabel = new JLabel("Saldo en cuenta ($):");
        importeLabel = new JLabel("Importe ($):");
        nombreTextField = new JTextField(10);
        montoTextField = new JTextField(10);
        saldoTextField = new JTextField(10);
        saldoTextField.setEditable(false); // Hacer que el campo de saldo no sea editable
        importeTextField = new JTextField(10);
        String[] opcionesSexo = {"Masculino", "Femenino"};
        sexoComboBox = new JComboBox<>(opcionesSexo);
        sexoComboBox.setMinimumSize(new Dimension(0, 0)); // Establecer el tamaño mínimo del JComboBox
        sexoComboBox.setMaximumSize(new Dimension(100, 20)); // Establecer el tamaño máximo del JComboBox
        sexoComboBox.setPreferredSize(new Dimension(80, 20)); // Establecer el tamaño preferido del JComboBox
        altaButton = new JButton("Alta");
        altaButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // Acción que se realiza cuando se hace clic en el botón "Alta"
                nombre = nombreTextField.getText();
                monto = Double.parseDouble(montoTextField.getText());
                sexo = (String)sexoComboBox.getSelectedItem();
                saldo = monto;
                saldoTextField.setText(Double.toString(saldo));
                altaButton.setEnabled(false); // Desactivar el botón "Alta" después de dar de alta al usuario
            }
        });
        movimientoButton = new JButton("Efectuar movimiento");
        movimientoButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // Acción que se realiza cuando se hace clic en el botón "Efectuar movimiento"
                double importe = Double.parseDouble(importeTextField.getText());
                if (depositoCheckBox.isSelected()) {
                    saldo += importe;
                } else if (retiroCheckBox.isSelected()) {
                    saldo -= importe;
                }
                // Actualizar la tabla de movimientos
                String tipoMovimiento = "";
                if (depositoCheckBox.isSelected()) {
                    tipoMovimiento = "Depósito";
                } else if (retiroCheckBox.isSelected()) {
                    tipoMovimiento = "Retiro";
                }
                String[] movimiento = {tipoMovimiento, Double.toString(importe)};
                tableModel.addRow(movimiento);
                // Actualizar el campo de saldo
                saldoTextField.setText(Double.toString(saldo));
                // Reiniciar los componentes de la sección de movimiento
                depositoCheckBox.setSelected(false);
                retiroCheckBox.setSelected(false);
                importeTextField.setText("");
            }
        // Crear panel de movimientos y agregar componentes
    JPanel movimientoPanel = new JPanel();
    movimientoPanel.setLayout(new BoxLayout(movimientoPanel, BoxLayout.PAGE_AXIS));
    movimientoPanel.setBorder(BorderFactory.createTitledBorder("MOVIMIENTO"));
    movimientoPanel.add(Box.createRigidArea(new Dimension(0, 10))); // Espacio en blanco

    // Crear botones de depósito y retiro
    JCheckBox depositoCheckBox = new JCheckBox("Depósito");
    JCheckBox retiroCheckBox = new JCheckBox("Retiro");

    // Crear campo de texto para el importe
    JTextField importeTextField = new JTextField(10);

    // Agregar botones y campo de texto al panel de movimiento
    movimientoPanel.add(depositoCheckBox);
    movimientoPanel.add(retiroCheckBox);
    movimientoPanel.add(Box.createRigidArea(new Dimension(0, 10))); // Espacio en blanco
    movimientoPanel.add(new JLabel("Importe($): "));
    movimientoPanel.add(importeTextField);
    movimientoPanel.add(Box.createRigidArea(new Dimension(0, 10))); // Espacio en blanco

    // Agregar panel de movimientos al panel principal
    panel.add(movimientoPanel);

    // Crear tabla para los movimientos
    String[] columnNames = {"Tipo de movimiento", "Importe"};
    Object[][] data = {{"", ""}};
    JTable movimientosTable = new JTable(data, columnNames);

    // Crear panel para la tabla de movimientos
    JPanel movimientosPanel = new JPanel();
    movimientosPanel.setLayout(new BoxLayout(movimientosPanel, BoxLayout.PAGE_AXIS));
    movimientosPanel.setBorder(BorderFactory.createTitledBorder("MOVIMIENTOS EN LA CUENTA"));
    movimientosPanel.add(Box.createRigidArea(new Dimension(0, 10))); // Espacio en blanco
    movimientosPanel.add(new JScrollPane(movimientosTable));

    // Agregar panel de movimientos al panel principal
    panel.add(movimientosPanel);

    // Crear botón para efectuar el movimiento
    JButton efectuaMovimientoButton = new JButton("EFECTUA MOVIMIENTO");
    efectuaMovimientoButton.addActionListener(new ActionListener() {
        public void actionPerformed(ActionEvent e) {
            // Acción que se realiza cuando se hace clic en el botón "Efectua movimiento"
            String tipoMovimiento = "";
            double importe = 0.0;

            if (depositoCheckBox.isSelected()) {
                tipoMovimiento = "Depósito";
                importe = Double.parseDouble(importeTextField.getText());
                saldo += importe;
            } else if (retiroCheckBox.isSelected()) {
                tipoMovimiento = "Retiro";
                importe = Double.parseDouble(importeTextField.getText());
                saldo -= importe;
            }

            // Actualizar la tabla de movimientos
            DefaultTableModel model = (DefaultTableModel) movimientosTable.getModel();
            model.addRow(new Object[]{tipoMovimiento, importe});

            // Actualizar el saldo disponible
            saldoLabel.setText("Saldo en cuenta ($): " + saldo);
        }
    });

    // Agregar botón de efectuar movimiento al panel de movimiento
    movimientoPanel.add(Box.createRigidArea(new Dimension(0, 10))); // Espacio en blanco
    movimientoPanel.add(efectuaMovimientoButton);
    movimientoPanel.add(Box.createRigidArea(new Dimension(0, 10))); // Espacio en blanco
    private void efectuarMovimiento() {
      String tipoMovimiento = "";
      double importe = 0;
      if (depositoCheckBox.isSelected()) {
          tipoMovimiento = "Depósito";
          importe = Double.parseDouble(importeTextField.getText());
          saldo += importe;
          saldoLabel.setText("Saldo en cuenta ($): " + saldo);
      } else if (retiroCheckBox.isSelected()) {
          tipoMovimiento = "Retiro";
          importe = -Double.parseDouble(importeTextField.getText());
          saldo += importe;
          saldoLabel.setText("Saldo en cuenta ($): " + saldo);
      }
  
      Movimiento movimiento = new Movimiento(tipoMovimiento, importe, saldo);
  
      movimientos.add(movimiento);
      MovimientoTableModel movimientoTableModel = new MovimientoTableModel(movimientos);
      movimientosTable.setModel(movimientoTableModel);
  
      importeTextField.setText("");
      JOptionPane.showMessageDialog(this, "Movimiento registrado correctamente.");
  }
  efectuarMovimientoButton.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        efectuarMovimiento();
    }
});