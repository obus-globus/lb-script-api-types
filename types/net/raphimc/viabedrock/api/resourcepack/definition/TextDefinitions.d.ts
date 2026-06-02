import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class TextDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private translations: { [key: string]: string };
    get(arg0: string): string;
    lookup(): (param0: string) => string;
    translate(arg0: string, arg1: Object[]): string;
}