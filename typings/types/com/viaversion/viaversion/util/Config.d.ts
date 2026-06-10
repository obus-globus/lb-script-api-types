import type { CommentStore } from '../../../../com/viaversion/viaversion/util/CommentStore.d.ts'
import type { ConfigSection } from '../../../../com/viaversion/viaversion/util/ConfigSection.d.ts'
import type { InputStreamSupplier } from '../../../../com/viaversion/viaversion/util/InputStreamSupplier.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Config extends ConfigSection {
    constructor(arg0: File, arg1: Logger)
    // private commentStore: CommentStore;
    // private configFile: File;
    // private logger: Logger;
    // private originalRoot: ConfigSection;
    getDefaultConfigInputStream(): InputStream;
    getDefaultConfigURL(): URL;
    getSectionsWithModifiableKeys(): string[];
    getUnsupportedOptions(): string[];
    handleConfig(arg0: { [key: string]: Object }): void;
    loadConfig(arg0: File): { [key: string]: Object };
    // private loadConfig(arg0: File, arg1: () => InputStream): { [key: string]: Object };
    loadConfig(arg0: File, arg1: URL): { [key: string]: Object };
    logger(): Logger;
    // private merge(arg0: string, arg1: { [key: string]: Object }, arg2: { [key: string]: Object }): void;
    originalRootSection(): ConfigSection;
    reload(): void;
    root(): Config;
    save(): void;
    save(arg0: File): void;
    save(arg0: File, arg1: { [key: string]: Object }): void;
}