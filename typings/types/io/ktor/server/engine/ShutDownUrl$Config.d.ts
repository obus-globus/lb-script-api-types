import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ShutDownUrl$Config extends Object {
    constructor()
    exit: (param0: number) => void;
    exitCodeSupplier: (param0: ApplicationCall) => number;
    shutDownUrl: string;
}