# 🚀 Mars Rover – Technical Test Solution

Este proyecto implementa la prueba técnica clásica del **Mars Rover** de NASA, utilizando **Node.js** y siguiendo una arquitectura limpia y modular.

---

## 📌 Enunciado simplificado

Un plateau de Marte se define con coordenadas máximas.  
Cada rover tiene una posición inicial y una serie de instrucciones:

- **L** → gira 90º izquierda  
- **R** → gira 90º derecha  
- **M** → avanza un punto manteniendo la dirección  

Cada rover se ejecuta de forma secuencial.

---

## 📁 Estructura del proyecto

mars-rover/
│
├── src/
│ ├── rover.js
│ ├── plateau.js
│ ├── app.js
│
├── test/
│ ├── rover.test.js
│
├── package.json
├── README.md

---

## ▶️ Ejecución

Instalar dependencias:

npm install

Ejecutar el programa:

npm start

Ejecutar los tests:

npm test

---

## 🧪 Ejemplo

### Entrada

5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

### Salida

1 3 N
5 1 E

---

## ✅ Tecnologías

- Node.js
- Mocha (testing)
- Arquitectura modular

---

## 📄 Licencia

MIT
