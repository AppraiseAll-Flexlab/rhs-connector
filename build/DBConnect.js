var _rhsDbConnector=require("rhs-db-connector");var getUniqueObjectId=_rhsDbConnector.DBCommon.getUniqueObjectId,getObjectId=_rhsDbConnector.DBCommon.getObjectId,invoke=_rhsDbConnector.DBCommon.invoke,invokeMethod=_rhsDbConnector.DBCommon.invokeMethod,DbConnect=_rhsDbConnector.DBCommon.DbConnect;var find=_rhsDbConnector.DBQuery.find,findSimple=_rhsDbConnector.DBQuery.findSimple;var commit=_rhsDbConnector.DBUpdate.commit,rollback=_rhsDbConnector.DBUpdate.rollback,insert=_rhsDbConnector.DBUpdate.insert,findAndModify=_rhsDbConnector.DBUpdate.findAndModify,update=_rhsDbConnector.DBUpdate.update,remove=_rhsDbConnector.DBUpdate.remove,save=_rhsDbConnector.DBUpdate.save,dropDB=_rhsDbConnector.DBUpdate.dropDB,drop=_rhsDbConnector.DBUpdate.drop,getIndexes=_rhsDbConnector.DBUpdate.getIndexes,dropIndex=_rhsDbConnector.DBUpdate.dropIndex,createIndex=_rhsDbConnector.DBUpdate.createIndex,typecastData=_rhsDbConnector.DBUpdate.typecastData;module.exports={getUniqueObjectId:getUniqueObjectId,getObjectId:getObjectId,find:find,findSimple:findSimple,invoke:invoke,invokeMethod:invokeMethod,DbConnect:DbConnect,commit:commit,rollback:rollback,insert:insert,findAndModify:findAndModify,update:update,remove:remove,save:save,dropDB:dropDB,drop:drop,getIndexes:getIndexes,dropIndex:dropIndex,createIndex:createIndex,typecastData:typecastData};