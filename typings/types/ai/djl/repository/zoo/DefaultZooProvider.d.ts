import type { ModelZoo } from '../../../../ai/djl/repository/zoo/ModelZoo.d.ts'
import type { ZooProvider } from '../../../../ai/djl/repository/zoo/ZooProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultZooProvider extends Object implements ZooProvider {
    constructor()
    getModelZoo(): ModelZoo;
    getName(): string;
}