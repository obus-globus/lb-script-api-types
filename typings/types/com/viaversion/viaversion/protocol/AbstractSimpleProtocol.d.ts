import type { AbstractProtocol } from '../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { SimpleProtocol } from '../../../../com/viaversion/viaversion/api/protocol/SimpleProtocol.d.ts'
import type { SimpleProtocol$DummyPacketTypes } from '../../../../com/viaversion/viaversion/api/protocol/SimpleProtocol$DummyPacketTypes.d.ts'
export abstract class AbstractSimpleProtocol extends AbstractProtocol<SimpleProtocol$DummyPacketTypes, SimpleProtocol$DummyPacketTypes, SimpleProtocol$DummyPacketTypes, SimpleProtocol$DummyPacketTypes> implements SimpleProtocol {
    constructor()
}