import type { Checksum } from '../../../../../../com/oracle/truffle/tools/dap/types/Checksum.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Source extends JSONBase {
    static create(): Source;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAdapterData(): Object;
    getChecksums(): Checksum[];
    getName(): string;
    getOrigin(): string;
    getPath(): string;
    getPresentationHint(): string;
    getSourceReference(): number;
    getSources(): Source[];
    hashCode(): number;
    setAdapterData(adapterData: Object): Source;
    setChecksums(checksums: Checksum[]): Source;
    setName(name: string): Source;
    setOrigin(origin: string): Source;
    setPath(path: string): Source;
    setPresentationHint(presentationHint: string): Source;
    setSourceReference(sourceReference: number): Source;
    setSources(sources: Source[]): Source;
}