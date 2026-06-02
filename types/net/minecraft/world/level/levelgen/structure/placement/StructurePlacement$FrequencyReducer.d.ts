import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface StructurePlacement$FrequencyReducer extends Object{
    shouldGenerate(seed: number, salt: number, sourceX: number, sourceZ: number, probability: number): boolean;
}