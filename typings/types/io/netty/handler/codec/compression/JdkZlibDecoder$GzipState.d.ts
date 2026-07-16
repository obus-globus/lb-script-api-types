import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class JdkZlibDecoder$GzipState extends Enum<JdkZlibDecoder$GzipState> {
    static FLG_READ: JdkZlibDecoder$GzipState;
    static FOOTER_START: JdkZlibDecoder$GzipState;
    static HEADER_END: JdkZlibDecoder$GzipState;
    static HEADER_START: JdkZlibDecoder$GzipState;
    static PROCESS_FHCRC: JdkZlibDecoder$GzipState;
    static SKIP_COMMENT: JdkZlibDecoder$GzipState;
    static SKIP_FNAME: JdkZlibDecoder$GzipState;
    static XLEN_READ: JdkZlibDecoder$GzipState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JdkZlibDecoder$GzipState;
    static values(): JdkZlibDecoder$GzipState[];
    private constructor()
    name(): "HEADER_START" | "HEADER_END" | "FLG_READ" | "XLEN_READ" | "SKIP_FNAME" | "SKIP_COMMENT" | "PROCESS_FHCRC" | "FOOTER_START";
}