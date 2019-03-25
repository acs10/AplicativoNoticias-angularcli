import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias = [];
  titulo: null;
  descricao: null;
  datapublicacao: null;
  categoria: null;
  sim: null;
  nao: null;
  tags: null;
  Editoria: null;
  editar: any = null;

  salvar() {

    if(this.editar){
      this.editar.titulo = this.titulo
      this.editar.descricao = this.descricao
      this.editar.datapublicacao = this.datapublicacao
      this.editar.categoria = this.categoria
      this.editar.tags = this.tags
      this.editar.Editoria = this.Editoria
    }else{
    const noticia = {
      id: this.noticias.length,
      titulo: this.titulo,
      descricao: this.descricao,
      datapublicacao: this.datapublicacao,
      categoria: this.categoria,
      sim: this.sim,
      nao: this.nao,
      tags: this.tags,
      Editoria: this.Editoria,
      visivel: false
    };
    this.noticias.push(noticia);
    
  }
  this.titulo = null;
  this.descricao = null;
  this.datapublicacao = null;
  this.categoria;
  this.tags;
  this.Editoria;
  this.nao = null;
  this.sim = null;
  this.editar = null;

}

  mostrar(noticia) {
    noticia.visivel = true;
  }
  fechar(noticia) {
    noticia.visivel = false;

  }
  iseditar(noticia) {
    this.editar = noticia
    this.titulo = noticia.titulo
    this.descricao = noticia.descricao
    this.datapublicacao = noticia.datapublicacao
    this.categoria = noticia.categoria
    this.tags = noticia.tags
    this.Editoria = noticia.Editoria
    console.log(noticia)
  }
  excluir(noticia) {
  if (confirm("Excluir a noticia "+ noticia.titulo +" ?"))
    this.noticias = this.noticias.filter(element => element.id != noticia.id)
  }
 }
 