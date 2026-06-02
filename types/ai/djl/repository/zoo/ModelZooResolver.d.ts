import type { ModelZoo } from '../../../../ai/djl/repository/zoo/ModelZoo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModelZooResolver extends Object{
    resolve(arg0: string): ModelZoo;
}