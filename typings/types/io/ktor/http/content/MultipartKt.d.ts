import type { MultiPartData } from '../../../../io/ktor/http/content/MultiPartData.d.ts'
import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
export class MultipartKt extends Object {
    static asFlow(self: MultiPartData): Flow<PartData>;
    static forEachPart(self: MultiPartData, partHandler: (param0: PartData) => void): void;
    static readAllParts(self: MultiPartData): PartData[];
}