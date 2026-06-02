import type { ModelZoo } from '../../../../ai/djl/repository/zoo/ModelZoo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ZooProvider extends Object{
    getModelZoo(): ModelZoo;
    getName(): string;
}