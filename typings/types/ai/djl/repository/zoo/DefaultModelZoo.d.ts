import type { Application } from '../../../../ai/djl/Application.d.ts'
import type { MRL } from '../../../../ai/djl/repository/MRL.d.ts'
import type { Criteria } from '../../../../ai/djl/repository/zoo/Criteria.d.ts'
import type { ModelZoo } from '../../../../ai/djl/repository/zoo/ModelZoo.d.ts'
import type { ModelZooResolver } from '../../../../ai/djl/repository/zoo/ModelZooResolver.d.ts'
import type { ZooModel } from '../../../../ai/djl/repository/zoo/ZooModel.d.ts'
import type { ZooProvider } from '../../../../ai/djl/repository/zoo/ZooProvider.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultModelZoo extends ModelZoo {
    static DJL_REPO_URL: URI;
    static GROUP_ID: string;
    static getModelZoo(paramarg0: string): ModelZoo;
    static hasModelZoo(paramarg0: string): boolean;
    static listModelZoo(): ModelZoo[];
    static listModels(): Map<Application, MRL[]>;
    static listModels(paramarg0: Criteria<Object, Object>): Map<Application, MRL[]>;
    static loadModel(paramarg0: Criteria<Object, Object>): ZooModel<Object, Object>;
    static registerModelZoo(paramarg0: ZooProvider): void;
    static setModelZooResolver(paramarg0: ModelZooResolver): void;
    constructor()
    constructor(arg0: string)
    getGroupId(): string;
    getSupportedEngines(): string[];
    // private parseLocation(arg0: string): void;
}