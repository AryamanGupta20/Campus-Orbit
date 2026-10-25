// Event dates are entered in India time, independent of the administrator's device.
export function eventFields(b,text,fail){
 const date=(value,label)=>{
  if(!value)return '';
  if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}\+05:30$/.test(value))fail(label+' must use India time.');
  const parsed=new Date(value);
  if(!Number.isFinite(+parsed)||new Date(+parsed+19800000).toISOString().slice(0,16)!==value.slice(0,16))fail('Choose a valid '+label.toLowerCase()+'.');
  return value;
 };
 const eventStart=date(b.eventStart,'Event start'),eventEnd=date(b.eventEnd,'Event end'),registrationDeadline=date(b.registrationDeadline,'Registration deadline');
 if(!!eventStart!==!!eventEnd)fail('Add both event start and end, or leave both empty.');
 if(eventStart&&Date.parse(eventEnd)<=Date.parse(eventStart))fail('Event end must be after the start.');
 if(eventEnd&&registrationDeadline&&Date.parse(registrationDeadline)>Date.parse(eventEnd))fail('Registration must close by the event end.');
 return {eventStart,eventEnd,registrationDeadline,venue:text(b.venue||'',160)};
}
export function visibleNotice(n,at=Date.now()){
 const expired=!!n.eventEnd&&Date.parse(n.eventEnd)<=Number(at);
 const registrationClosed=!!n.registrationDeadline&&Date.parse(n.registrationDeadline)<=Number(at);
 return {...n,enabled:!!n.enabled&&!expired,expired,registrationClosed};
}

export function noticeDefaults(slot,primary){
 if(slot===1)return primary;
 return {enabled:false,label:slot===2?'Tech community':'Placement cell',title:slot===2?'Less watching. More building.':'Your next chapter. Meet the possibilities.',description:slot===2?'Add the confirmed details of your university workshop here.':'Add the confirmed details of your career or alumni event here.',tags:slot===2?['Workshop','Student projects']:['Careers','Alumni'],button:'',url:'',image:'',backgroundImage:''};
}
export const noticeKey=slot=>slot===1?'noticeboard':'noticeboard-'+slot;
