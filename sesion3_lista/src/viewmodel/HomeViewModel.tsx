import { list_cats } from '../model/cats';


//VIEWMODEL HOME, LISTA DE GATOS
export class HomeViewModel {
    private gato_selecionado: { id: number; nombre: string; color: string; mh: string; } = 
    {
        id: 1,
        nombre: 'gato1',
        color: 'negro',
        mh: 'macho'
    }
    private gatos: { id: number; nombre: string; color: string; mh: string; } [] = [];
    private subscribers: Array<() => void> = [];
    constructor() {
        //DESDE EL CONSTRUCTOR SE TRAE LA LISTA DE GATOS
        this.loadItems();
        
    }

    //FUNCION QUE TRAE Y ASIGNA LA LISTA
    private async loadItems() {
        this.gatos = list_cats;
        this.gato_selecionado = this.gatos[0];
        this.notifyChange();
    }

    //FUNCON QUE DEVUELVE LA LISTA
    public getItems(): { id: number; nombre: string; color: string; mh: string; }[] {
        return this.gatos;
    }

    public getGatoseleccionado(): { id: number; nombre: string; color: string; mh: string; } {
        return this.gato_selecionado;
    }

    public async seleccionarGato(gato_id: number) {
        this.gato_selecionado = this.gatos[gato_id - 1];
        this.notifyChange();
    }
    /*public async addItem(newItem: string): Promise<void> {
        if (newItem.trim()) {
            this.items = await list_cats(newItem);
            this.notifyChange();
        }
    }
    public async removeItem(index: number): Promise<void> {
        this.items = await removeItemFromAPI(index);
        this.notifyChange();
    }*/

    // Suscripción a cambios PARA ACTUALIZAR LA VIEW
    public subscribe(callback: () => void): () => void {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback);
        };
    }
    private notifyChange() {
        this.subscribers.forEach(cb => cb());
    }
}