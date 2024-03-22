import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import MercadoPago from 'react-native-mercadopago';
import PayPal from 'react-native-paypal-wrapper';

const PaymentScreen = () => {
  const [loading, setLoading] = useState(false);

  const handleMercadoPagoPayment = async () => {
    setLoading(true);
    try {
      // Configura MercadoPago con tus credenciales
      await MercadoPago.startCheckout({
        // Configuración de tu cuenta de MercadoPago
      });
    } catch (error) {
      console.error('Error en el pago de MercadoPago:', error);
      Alert.alert('Error', 'Ocurrió un error al procesar el pago. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalPayment = async () => {
    setLoading(true);
    try {
      // Configura PayPal con tus credenciales
      const approvalUrl = await PayPal.initializePayment({
        // Configuración de tu cuenta de PayPal
      });

      // Abre el navegador para completar el pago
      await PayPal.openPaymentURL(approvalUrl);
    } catch (error) {
      console.error('Error en el pago de PayPal:', error);
      Alert.alert('Error', 'Ocurrió un error al procesar el pago. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pagar con MercadoPago" onPress={handleMercadoPagoPayment} disabled={loading} />
      <Button title="Pagar con PayPal" onPress={handlePayPalPayment} disabled={loading} />
    </View>
  );
};

export default PaymentScreen;

document.getElementById('mercadoPagoBtn').addEventListener('click', function() {
    // Lógica para iniciar el flujo de pago con MercadoPago
    // Por ejemplo, redirigir al usuario a la página de pago de MercadoPago
    window.location.href = 'url_de_pago_mercadopago';
});

document.getElementById('paypalBtn').addEventListener('click', function() {
    // Lógica para iniciar el flujo de pago con PayPal
    // Por ejemplo, redirigir al usuario a la página de pago de PayPal
    window.location.href = 'url_de_pago_paypal';
});

