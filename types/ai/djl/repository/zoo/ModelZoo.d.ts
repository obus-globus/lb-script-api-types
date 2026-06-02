import type { Application } from '../../../../ai/djl/Application.d.ts'
import type { MRL } from '../../../../ai/djl/repository/MRL.d.ts'
import type { Repository } from '../../../../ai/djl/repository/Repository.d.ts'
import type { Criteria } from '../../../../ai/djl/repository/zoo/Criteria.d.ts'
import type { ModelLoader } from '../../../../ai/djl/repository/zoo/ModelLoader.d.ts'
import type { ModelZooResolver } from '../../../../ai/djl/repository/zoo/ModelZooResolver.d.ts'
import type { ZooModel } from '../../../../ai/djl/repository/zoo/ZooModel.d.ts'
import type { ZooProvider } from '../../../../ai/djl/repository/zoo/ZooProvider.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ModelZoo extends Object {
    static DJL_REPO_URL: URI;
    static getModelZoo(paramarg0: string): ModelZoo;
    static hasModelZoo(paramarg0: string): boolean;
    static listModelZoo(): E[];
    static listModels(): Map<Application, Object | null>;
    static listModels(paramarg0: Criteria<Object, Object>): Map<Application, Object | null>;
    static loadModel(paramarg0: Criteria<Object, Object>): ZooModel<Object, Object>;
    static registerModelZoo(paramarg0: ZooProvider): void;
    static setModelZooResolver(paramarg0: ModelZooResolver): void;
    constructor()
    readonly modelLoaders: { [key: string]: ModelLoader };
    addModel(arg0: MRL): void;
    addModel(arg0: ModelLoader): void;
    getGroupId(): string;
    getModelLoader(arg0: string): ModelLoader;
    getModelLoaders(): E[];
    getSupportedEngines(): string[];
    listModels(arg0: Repository, arg1: Application): { [key: string]: { [key: string]: Object } };
}