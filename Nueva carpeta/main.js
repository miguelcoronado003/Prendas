

// Clase Prenda
class Prenda {
    constructor(nombre, talla, color, precio) {
      this.nombre = nombre;
      this.talla = talla;
      this.color = color;
      this.precio = precio;
    }
  
    // Método mostrar detalles de la prenda
    mostrarDetalles() {
      return `${this.nombre}, Talla: ${this.talla}, Color: ${this.color}, Precio: ${this.precio}`;
    }
  }
  
  // Subclase Camiseta
  class Camiseta extends Prenda {
    constructor(nombre, talla, color, precio, manga) {
      super(nombre, talla, color, precio);
      this.manga = manga;
    }
  
    // Método específico para camisetas
    mostrarDetalles() {
      return `${super.mostrarDetalles()}, Manga: ${this.manga}`;
    }
  }
  
  // Subclase Pantalon
  class Pantalon extends Prenda {
    constructor(nombre, talla, color, precio, tipo) {
      super(nombre, talla, color, precio);
      this.tipo = tipo;
    }
  
    // Método específico para pantalones
    mostrarDetalles() {
      return `${super.mostrarDetalles()}, Tipo: ${this.tipo}`;
    }
  }
  
  // Subclase Zapato
  class Zapato extends Prenda {
    constructor(nombre, talla, color, precio, estilo) {
      super(nombre, talla, color, precio);
      this.estilo = estilo;
    }
  
    // Método específico para zapatos
    mostrarDetalles() {
      return `${super.mostrarDetalles()}, Estilo: ${this.estilo}`;
    }
  }
  
  // Función de agregar prenda
  const addItemForm = document.getElementById('add-item-form');
  addItemForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const price = parseFloat(document.getElementById('price').value);
  
    let newItem;
  
    // Instancia de la clase según el tipo seleccionado
    switch (type) {
      case 'camiseta':
        const manga = prompt('Ingrese el tipo de manga (corta, larga, etc.):');
        newItem = new Camiseta(name, size, color, price, manga);
        break;
      case 'pantalon':
        const tipo = prompt('Ingrese el tipo de pantalón (jeans, deportivo, etc.):');
        newItem = new Pantalon(name, size, color, price, tipo);
        break;
      case 'zapato':
        const estilo = prompt('Ingrese el estilo de zapato (zapatilla, bota, etc.):');
        newItem = new Zapato(name, size, color, price, estilo);
        break;
      default:
        alert('Tipo de prenda no válido.');
        return;
    }
  
    // Agregar la nueva prenda a la lista
    agregarPrendaALista(newItem);
  
    // Limpiar el formulario
    addItemForm.reset();
  });
  
  // Función para agregar una prenda a la lista 
  function agregarPrendaALista(prenda) {
    const inventoryList = document.getElementById(`${prenda instanceof Camiseta ? 'camisetas-list' : prenda instanceof Pantalon ? 'pantalones-list' : 'zapatos-list'}`);
    
    // Crear un botón de eliminar 
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete-button');
    
    // Crear un elemento de lista para mostrar la nueva prenda
    const li = document.createElement('li');
    li.textContent = prenda.mostrarDetalles();
    li.appendChild(deleteButton); // Agregar el botón de eliminar al elemento de lista
    
    inventoryList.appendChild(li);
  }
  
  // Función para eliminar una prenda del inventario
  function eliminarPrenda(event) {
    const item = event.target.closest('li');
    if (!item) return;
  
    item.remove();
  }
  
  // Agregar un event listener al cuerpo del documento para manejar los clics en los botones de eliminar
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
      eliminarPrenda(event);
    }
  });
  