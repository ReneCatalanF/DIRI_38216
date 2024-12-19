import { list_cats } from '../model/cats';


//VIEWMODEL HOME, LISTA DE GATOS
export class HomeViewModel {
    private gatos: { id: number; nombre: string; color: string; } [] = [];
    private subscribers: Array<() => void> = [];
    constructor() {
        //DESDE EL CONSTRUCTOR SE TRAE LA LISTA DE GATOS
        this.loadItems();
    }

    //FUNCION QUE TRAE Y ASIGNA LA LISTA
    private async loadItems() {
        this.gatos = list_cats;
        this.notifyChange();
    }

    //FUNCON QUE DEVUELVE LA LISTA
    public getItems(): { id: number; nombre: string; color: string; }[] {
        return this.gatos;
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