import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Http2Reader$Companion extends Object {
    readonly logger: Logger;
    lengthWithoutPadding(length: number, flags: number, padding: number): number;
}