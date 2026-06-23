import type { StructuredDataContainer } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { TextComponentCodec } from '../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/TextComponentCodec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProtocolConstants extends Object {
    static BEDROCK_COMMAND_VERSION: string;
    static BEDROCK_NETHERNET_DEFAULT_PORT: number;
    static BEDROCK_PROTOCOL_VERSION: number;
    static BEDROCK_RAKNET_DEFAULT_PORT: number;
    static BEDROCK_RAKNET_PROTOCOL_VERSION: number;
    static BEDROCK_REQUEST_CHUNK_RADIUS_MAX_RADIUS: number;
    static BEDROCK_VERSION_NAME: string;
    static BLOCK_FRICTION: number;
    static JAVA_AIR_ID: number;
    static JAVA_PACK_VERSION: number;
    static JAVA_PROTOCOL_CLASS: Class<Protocol<any, any, any, any>>;
    static JAVA_TEXT_COMPONENT_SERIALIZER: TextComponentCodec;
    static JAVA_VERSION: ProtocolVersion;
    static LAST_BLOCK_ITEM_ID: number;
    static PLAYER_GRAVITY: number;
    static createStructuredDataContainer(): StructuredDataContainer;
    constructor()
}