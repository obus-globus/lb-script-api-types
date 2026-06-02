import type { UnsupportedPlugin } from '../../../../com/viaversion/viaversion/unsupported/UnsupportedPlugin.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnsupportedPlugin$Builder extends Object {
    constructor()
    // private identifiers: string[];
    // private name: string;
    // private reason: string;
    addPlugin(arg0: string): UnsupportedPlugin$Builder;
    build(): UnsupportedPlugin;
    name(arg0: string): UnsupportedPlugin$Builder;
    reason(arg0: string): UnsupportedPlugin$Builder;
}