export interface Producto {
  nombre: string;
  precioNormal: number;
  precioReducido: number;
  descripcion: string;
  foto: string;
  id: string;
  fecha: Date;
}

export interface Cliente{
  uid: string;
  email: string;
  nombre: string;
  celular: string;
  foto: string;
  mesa: string;
  direccion: any;
}


export interface Pedido{
  id: string;
  cliente: Cliente;
  productos: ProductoPedido[];
  precioTotal: number;
  estado: EstadoPedido;
  fecha: any;
  valoracion: number;

}

export interface ProductoPedido{
  producto: Producto;
  cantidad: number;


}



export interface Comentario {
  autor: string;
  comentario: string;
  fecha: any;
  id: string;
}


export type EstadoPedido= 'enviado' | 'visto' | 'camino' | 'entregado';
