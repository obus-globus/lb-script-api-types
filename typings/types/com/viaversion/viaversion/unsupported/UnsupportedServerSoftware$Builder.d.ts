import type { UnsupportedSoftware } from '../../../../com/viaversion/viaversion/api/platform/UnsupportedSoftware.d.ts'
import type { UnsupportedMethods } from '../../../../com/viaversion/viaversion/unsupported/UnsupportedMethods.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnsupportedServerSoftware$Builder extends Object {
    constructor()
    // private classNames: string[];
    // private methods: UnsupportedMethods[];
    // private name: string;
    // private reason: string;
    addClassName(arg0: string): UnsupportedServerSoftware$Builder;
    addMethod(arg0: string, arg1: string): UnsupportedServerSoftware$Builder;
    addMethods(arg0: string, ...arg1: string[]): UnsupportedServerSoftware$Builder;
    build(): UnsupportedSoftware;
    name(arg0: string): UnsupportedServerSoftware$Builder;
    reason(arg0: string): UnsupportedServerSoftware$Builder;
}