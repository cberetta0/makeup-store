# Glow Beauty

Glow Beauty es una aplicación web desarrollada con React que simula una tienda e-commerce de productos de maquillaje.

El proyecto fue realizado utilizando componentes reutilizables, React Router para la navegación y un archivo JSON local para simular la obtención de productos desde una API.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router DOM

## Funcionalidades

- Página de inicio.
- Catálogo de productos.
- Obtención de productos desde `productos.json` utilizando `fetch` y `useEffect`.
- Componentes reutilizables para mostrar productos.
- Vista de detalle de cada producto.
- Página de carrito.
- Navegación con `react-router-dom`.
- Layout general con Header, NavBar y Footer.
- Diseño responsive.

## Estructura principal

```text
src/
├── components/
│   ├── layout/
│   ├── products/
│   └── cart/
├── pages/
├── styles/
├── App.jsx
└── main.jsx
```

Los productos se encuentran almacenados en:

```text
public/productos.json
```

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Luego iniciar el proyecto:

```bash
npm run dev
```

La aplicación estará disponible en la dirección indicada por Vite, normalmente:

```text
http://localhost:5173
```

## Rutas

```text
/                 Inicio
/productos        Catálogo de productos
/producto/:id     Detalle de producto
/carrito          Carrito de compras
```