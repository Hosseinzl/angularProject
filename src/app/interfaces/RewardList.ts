export interface RewardList {
    rewards: Reward[]
    totalCount: number
  }
  
  export interface Reward {
    id: string
    title: string
    miniDescription: string
    isFavorite: boolean
    imageUrl: string
    point: number
    createdDate: string
    sellCount: number
    categotyId: string
  }
  