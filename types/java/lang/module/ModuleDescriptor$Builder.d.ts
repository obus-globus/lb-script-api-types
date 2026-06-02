import type { ModuleDescriptor } from '../../../java/lang/module/ModuleDescriptor.d.ts'
import type { ModuleDescriptor$Exports } from '../../../java/lang/module/ModuleDescriptor$Exports.d.ts'
import type { ModuleDescriptor$Exports$Modifier } from '../../../java/lang/module/ModuleDescriptor$Exports$Modifier.d.ts'
import type { ModuleDescriptor$Modifier } from '../../../java/lang/module/ModuleDescriptor$Modifier.d.ts'
import type { ModuleDescriptor$Opens } from '../../../java/lang/module/ModuleDescriptor$Opens.d.ts'
import type { ModuleDescriptor$Opens$Modifier } from '../../../java/lang/module/ModuleDescriptor$Opens$Modifier.d.ts'
import type { ModuleDescriptor$Provides } from '../../../java/lang/module/ModuleDescriptor$Provides.d.ts'
import type { ModuleDescriptor$Requires } from '../../../java/lang/module/ModuleDescriptor$Requires.d.ts'
import type { ModuleDescriptor$Requires$Modifier } from '../../../java/lang/module/ModuleDescriptor$Requires$Modifier.d.ts'
import type { ModuleDescriptor$Version } from '../../../java/lang/module/ModuleDescriptor$Version.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ModuleDescriptor$Builder extends Object {
    constructor(arg0: string, arg1: boolean, arg2: ModuleDescriptor$Modifier[])
    // private automatic: boolean;
    // private exports: { [key: string]: ModuleDescriptor$Exports };
    // private mainClass: string;
    // private modifiers: ModuleDescriptor$Modifier[];
    // private name: string;
    // private open: boolean;
    // private opens: { [key: string]: ModuleDescriptor$Opens };
    // private packages: string[];
    // private provides: { [key: string]: ModuleDescriptor$Provides };
    // private rawVersionString: string;
    // private requires: { [key: string]: ModuleDescriptor$Requires };
    // private strict: boolean;
    // private uses: string[];
    // private version: ModuleDescriptor$Version;
    build(): ModuleDescriptor;
    exports(arg0: ModuleDescriptor$Exports): ModuleDescriptor$Builder;
    exports(arg0: string): ModuleDescriptor$Builder;
    exports(arg0: string, arg1: string[]): ModuleDescriptor$Builder;
    exports(arg0: ModuleDescriptor$Exports$Modifier[], arg1: string): ModuleDescriptor$Builder;
    exports(arg0: ModuleDescriptor$Exports$Modifier[], arg1: string, arg2: string[]): ModuleDescriptor$Builder;
    mainClass(arg0: string): ModuleDescriptor$Builder;
    opens(arg0: ModuleDescriptor$Opens): ModuleDescriptor$Builder;
    opens(arg0: string): ModuleDescriptor$Builder;
    opens(arg0: string, arg1: string[]): ModuleDescriptor$Builder;
    opens(arg0: ModuleDescriptor$Opens$Modifier[], arg1: string): ModuleDescriptor$Builder;
    opens(arg0: ModuleDescriptor$Opens$Modifier[], arg1: string, arg2: string[]): ModuleDescriptor$Builder;
    packages(): string[];
    packages(arg0: string[]): ModuleDescriptor$Builder;
    provides(arg0: ModuleDescriptor$Provides): ModuleDescriptor$Builder;
    provides(arg0: string, arg1: string[]): ModuleDescriptor$Builder;
    requires(arg0: ModuleDescriptor$Requires): ModuleDescriptor$Builder;
    requires(arg0: string): ModuleDescriptor$Builder;
    requires(arg0: ModuleDescriptor$Requires$Modifier[], arg1: string): ModuleDescriptor$Builder;
    requires(arg0: ModuleDescriptor$Requires$Modifier[], arg1: string, arg2: ModuleDescriptor$Version): ModuleDescriptor$Builder;
    requires(arg0: ModuleDescriptor$Requires$Modifier[], arg1: string, arg2: string): ModuleDescriptor$Builder;
    uses(arg0: string): ModuleDescriptor$Builder;
    version(arg0: ModuleDescriptor$Version): ModuleDescriptor$Builder;
    version(arg0: string): ModuleDescriptor$Builder;
}