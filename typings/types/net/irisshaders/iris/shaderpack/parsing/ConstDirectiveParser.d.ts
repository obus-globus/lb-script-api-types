import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConstDirectiveParser$ConstDirective } from '../../../../../net/irisshaders/iris/shaderpack/parsing/ConstDirectiveParser$ConstDirective.d.ts'
export class ConstDirectiveParser extends Object {
    static findDirectiveInLine(paramarg0: string): Optional<ConstDirectiveParser$ConstDirective>;
    static findDirectives(paramarg0: string): ConstDirectiveParser$ConstDirective[];
    constructor()
}