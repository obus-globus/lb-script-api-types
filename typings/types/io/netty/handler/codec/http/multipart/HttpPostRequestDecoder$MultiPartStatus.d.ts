import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class HttpPostRequestDecoder$MultiPartStatus extends Enum<HttpPostRequestDecoder$MultiPartStatus> {
    static CLOSEDELIMITER: HttpPostRequestDecoder$MultiPartStatus;
    static DISPOSITION: HttpPostRequestDecoder$MultiPartStatus;
    static EPILOGUE: HttpPostRequestDecoder$MultiPartStatus;
    static FIELD: HttpPostRequestDecoder$MultiPartStatus;
    static FILEUPLOAD: HttpPostRequestDecoder$MultiPartStatus;
    static HEADERDELIMITER: HttpPostRequestDecoder$MultiPartStatus;
    static MIXEDCLOSEDELIMITER: HttpPostRequestDecoder$MultiPartStatus;
    static MIXEDDELIMITER: HttpPostRequestDecoder$MultiPartStatus;
    static MIXEDDISPOSITION: HttpPostRequestDecoder$MultiPartStatus;
    static MIXEDFILEUPLOAD: HttpPostRequestDecoder$MultiPartStatus;
    static MIXEDPREAMBLE: HttpPostRequestDecoder$MultiPartStatus;
    static NOTSTARTED: HttpPostRequestDecoder$MultiPartStatus;
    static PREAMBLE: HttpPostRequestDecoder$MultiPartStatus;
    static PREEPILOGUE: HttpPostRequestDecoder$MultiPartStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HttpPostRequestDecoder$MultiPartStatus;
    static values(): HttpPostRequestDecoder$MultiPartStatus[];
    private constructor()
    name(): "NOTSTARTED" | "PREAMBLE" | "HEADERDELIMITER" | "DISPOSITION" | "FIELD" | "FILEUPLOAD" | "MIXEDPREAMBLE" | "MIXEDDELIMITER" | "MIXEDDISPOSITION" | "MIXEDFILEUPLOAD" | "MIXEDCLOSEDELIMITER" | "CLOSEDELIMITER" | "PREEPILOGUE" | "EPILOGUE";
}