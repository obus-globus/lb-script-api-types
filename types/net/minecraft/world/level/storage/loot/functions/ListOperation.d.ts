import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListOperation$Type } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation$Type.d.ts'
export interface ListOperation extends Object{
    apply(original: T[], replacement: T[]): T[];
    apply(original: T[], replacement: T[], maxSize: number): T[];
    mode(): ListOperation$Type;
}