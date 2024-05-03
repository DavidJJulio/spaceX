import {
    getAllRockets,
    getAllRocketsId,
    getRocketMassTotal,
    getRocketPayloadWeightsTotal,
    getRocketHeightTotal,
    getRocketDiameterTotal,
    getRocketSecondStageCompositeFairingDiameterTotal,
    getRocketSecondStageCompositeFairingHeightTotal,
} from "./modules/rockets.js"

console.log(await getRocketSecondStageCompositeFairingHeightTotal())