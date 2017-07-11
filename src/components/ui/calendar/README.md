Calendar
===================
`uni-calendar`
---
:white_check_mark: Estable

Calendario para la selección de días

## Uso

## Ejemplo

```html
<uni-calendar [(uniModel)]="daySelected"></uni-calendar>
```

### Atributos de entrada

| Nombre      | Tipo                  | Por defecto | Descripción 
| ----------- | --------------------- | ----------- | -----------
| uniModel    | `string` (YYYY-MM-DD) | `undefined` | Valor introducido en el input
| maxDate     | `string`              | `''`        | Nombre del campo de cara a usarse en formularios
| minDate     | `string`              | `''`        | Nombre del campo de cara a usarse en formularios
| rangeFrom   | `string`              | `''`        | Nombre del campo de cara a usarse en formularios
| rangeTo     | `string`              | `''`        | Nombre del campo de cara a usarse en formularios

### Eventos de salida

| Nombre         | Tipo                     | Descripción
| -------------- | ------------------------ | -----------
| uniModelChange | `string` (YYYY-MM-DD)    | Notifica cuando se ha seleccionado un fichero exitosamente


## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
- Habilitar la selección de semanas y meses