export class DetallesPersonajes {
  public img: string;
  public nombre: string;
  public powerstats: string;

  constructor(nombre: string, img: string, powerstats: string) {
    this.nombre = nombre;
    this.img = img;
    this.powerstats = powerstats;
  }
}
