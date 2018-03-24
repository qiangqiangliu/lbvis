import * as types from './types';

export default {
  setGraphData({ commit, state }, graphData) {
    commit(types.GRAPH_DATA, graphData)
  },
  setCurtime({ commit, state }, curtime) {
    commit(types.CURTIME, curtime)
  },
  setDaySta({ commit, state }, daysta) {
    commit(types.DAY_STA, daysta)
  },
  setTrajData({ commit, state }, trajData) {
    commit(types.TRAJDATA, trajData)
  },
  setMinuteSta({ commit, state }, minutesta) {
    console.log(' commit(types.MINUTE_STA, minutesta)')
    commit(types.MINUTE_STA, minutesta)
  },
  setAirportSelected({ commit, state }, airportSelected) {
    commit(types.AIRPORTSELECTED, airportSelected)
  },
  setTimelineTopRange({ commit, state }, timelineTopRange) {
  	//console.log('setTimelineTopRange action', timelineTopRange)
    commit(types.TIMELINETOPRANGE, timelineTopRange)
  },
  setCurtime({ commit, state }, curtime) {
    commit(types.CURTIME, curtime)
  },
  setSlidingwindowsize({ commit, state }, slidingwindowsize) {
    commit(types.SLIDINGWINDOWSIZE, slidingwindowsize)
  }
}
	