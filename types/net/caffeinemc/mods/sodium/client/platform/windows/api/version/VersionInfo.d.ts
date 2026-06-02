import type { Closeable } from '../../../../../../../../../java/io/Closeable.d.ts'
import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { LanguageCodePage } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/version/LanguageCodePage.d.ts'
import type { VersionFixedFileInfoStruct } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/version/VersionFixedFileInfoStruct.d.ts'
export class VersionInfo extends Object implements Closeable {
    static allocate(paramarg0: number): VersionInfo;
    constructor(arg0: ByteBuffer)
    // private pBlock: ByteBuffer;
    address(): number;
    close(): void;
    queryEnglishTranslation(): LanguageCodePage;
    queryFixedFileInfo(): VersionFixedFileInfoStruct;
    queryValue(arg0: string, arg1: LanguageCodePage): string;
}