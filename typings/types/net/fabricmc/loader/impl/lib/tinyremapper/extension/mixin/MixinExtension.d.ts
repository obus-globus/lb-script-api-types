import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InputTag } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/InputTag.d.ts'
import type { TinyRemapper$Builder } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$Builder.d.ts'
import type { TinyRemapper$Extension } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$Extension.d.ts'
import type { TrEnvironment } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrEnvironment.d.ts'
import type { MixinExtension$AnnotationTarget } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/MixinExtension$AnnotationTarget.d.ts'
import type { CommonData } from '../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
export class MixinExtension extends Object implements TinyRemapper$Extension {
    constructor()
    constructor(arg0: (param0: InputTag) => boolean)
    constructor(arg0: MixinExtension$AnnotationTarget[])
    constructor(arg0: MixinExtension$AnnotationTarget[], arg1: (param0: InputTag) => boolean)
    // private inputTagFilter: (param0: InputTag) => boolean;
    // private targets: MixinExtension$AnnotationTarget[];
    // private tasks: { [key: number]: (param0: CommonData) => void[] };
    attach(arg0: TinyRemapper$Builder): void;
    // private stateProcessor(arg0: TrEnvironment): void;
}