import split from 'lodash-es/split'
import drop from 'lodash-es/drop'
import join from 'lodash-es/join'
import each from 'lodash-es/each'
import range from 'lodash-es/range'
import toNumber from 'lodash-es/toNumber'
import str2obj from 'wsemi/src/str2obj.mjs'
import haskey from 'wsemi/src/haskey.mjs'


let sData = {}
function mergeSplitData(msg, parserData) {

    //ss
    let ss = split(msg, '|')

    //pkid
    let pkid = ss[0]

    //pki
    let pki = toNumber(ss[1])

    //pkn
    let pkn = toNumber(ss[2])

    //str
    let str = join(drop(ss, 3), '|') //因數據本身可能就含有「|」故需合併回去

    //default
    if (!haskey(sData, pkid)) {
        sData[pkid] = {}
    }

    //save
    sData[pkid]['_' + pki] = str

    //偵測最後一筆進行處理, 因websocket資料傳輸是循序的
    if (pki === pkn - 1) {

        //merge
        let strAll = ''
        each(range(pkn), function(pki) {
            strAll += sData[pkid]['_' + pki]
        })

        //delete
        delete sData[pkid]

        //data
        let data = str2obj(strAll)

        //parserData
        parserData(data)

    }

}


export default mergeSplitData
