type TupleToUnion<T extends unknown[]> = T extends (infer U)[] ? U : never
export type FactionsType = ['air', 'water', 'fire', 'earth']
export type FactionType = TupleToUnion<FactionsType>
export type character = {
  name: string
  faction?: FactionType
  isFavorite: boolean
}
