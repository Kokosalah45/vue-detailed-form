export type TupleToUnion<T extends unknown[]> = T extends (infer U)[] ? U : never
