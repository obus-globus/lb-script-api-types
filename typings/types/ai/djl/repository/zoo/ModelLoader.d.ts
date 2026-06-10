import type { Application } from '../../../../ai/djl/Application.d.ts'
import type { MRL } from '../../../../ai/djl/repository/MRL.d.ts'
import type { Criteria } from '../../../../ai/djl/repository/zoo/Criteria.d.ts'
import type { ZooModel } from '../../../../ai/djl/repository/zoo/ZooModel.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModelLoader extends Object{
    downloadModel<I extends Object | number | string | boolean, O extends Object | number | string | boolean>(arg0: Criteria<I, O>, arg1: Progress): void;
    getApplication(): Application;
    getArtifactId(): string;
    getGroupId(): string;
    getMrl(): MRL;
    isDownloaded<I extends Object | number | string | boolean, O extends Object | number | string | boolean>(arg0: Criteria<I, O>): boolean;
    loadModel<I extends Object | number | string | boolean, O extends Object | number | string | boolean>(arg0: Criteria<I, O>): ZooModel<I, O>;
}