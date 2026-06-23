import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListOperation$Type } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation$Type.d.ts'
export interface ListOperation extends Object{
    apply<T extends unknown>(original: T[], replacement: T[]): T[];
    apply<T extends unknown>(original: T[], replacement: T[], maxSize: number): T[];
    mode(): ListOperation$Type;
}