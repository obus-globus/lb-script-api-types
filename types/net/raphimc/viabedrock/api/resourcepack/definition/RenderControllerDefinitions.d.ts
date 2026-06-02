import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
import type { BedrockRenderController } from '../../../../../../org/cube/converter/data/bedrock/controller/BedrockRenderController.d.ts'
export class RenderControllerDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private renderControllers: { [key: string]: BedrockRenderController };
    get(arg0: string): BedrockRenderController;
    renderControllers(): { [key: string]: BedrockRenderController };
}