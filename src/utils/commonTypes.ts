export type storeProductType = {
    id : number,
    price : number,
    title : string,
    description: string,
    category : string,
    image : string,
    rating: {
        count : number,
        rate : number
    }
}

export type authProviderType = {
  google : {
    id: string,
    name: string,
    signinUrl : string,
    callbackUrl : string 
  }
}

export interface cartItemType extends storeProductType {
  // product: storeProductType,
  quantity: number
}

export type reducerAddCartActionType = {
  payload: storeProductType,
  type: string,
}

export type reducerStateType = {
  items: cartItemType[]
}