import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '馃憢 Ol谩, como vai? \n\nEu sou Carlos, o *assistente virtual* da Del铆cias da Neide. \n*Posso te ajudar?* 馃檵鈥嶁檪锔� \n-----------------------------------\n1锔忊儯 - ```FAZER PEDIDO``` \n2锔忊儯 - ```VERIFICAR TAXA DE ENTREGA```\n0锔忊儯 - ```FALAR COM ATENDENTE```';
  },
};
