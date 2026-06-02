import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OutputConsumerPath } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/OutputConsumerPath.d.ts'
export class OutputConsumerPath$Builder extends Object {
    constructor(arg0: Path[])
    // private assumeArchive: boolean;
    // private classNameFilter: (param0: string) => kotlin.Boolean;
    // private destination: Path[];
    // private threadSyncWrites: boolean;
    assumeArchive(arg0: boolean): OutputConsumerPath$Builder;
    build(): OutputConsumerPath;
}