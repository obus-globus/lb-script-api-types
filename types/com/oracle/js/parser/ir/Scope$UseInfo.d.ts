import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Scope$UseInfo extends Object {
    private constructor(name: string, use: Scope, def: Scope)
    // private def: Scope;
    // private innerUseScopes: Scope[];
    // private name: string;
    // private use: Scope;
    addInnerUse(useScope: Scope): void;
    hasInnerUse(): boolean;
    isResolved(): boolean;
    isUnresolved(): boolean;
}