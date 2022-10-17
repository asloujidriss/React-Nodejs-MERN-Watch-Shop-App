export default()=>{
    return(
        <div>

{/* START CONTENT FRAME */}
<div className="content-frame">   

  {/* START CONTENT FRAME TOP */}
  <div className="content-frame-top">                        
    <div className="page-title">                    
      <h2><span className="fa fa-inbox" /> Inbox <small>(3 unread)</small></h2>
    </div>                                                                                
    <div className="pull-right">                            
      <button className="btn btn-default"><span className="fa fa-cogs" /> Settings</button>
      <button className="btn btn-default content-frame-left-toggle"><span className="fa fa-bars" /></button>
    </div>                        
  </div>
  {/* END CONTENT FRAME TOP */}

  {/* START CONTENT FRAME LEFT */}
  <div className="content-frame-left">
    <div className="block">
      <div className="bouton">
      <a href="pages-mailbox-compose.html" className="btn bouton btn-block btn-lg"><span className="fa fa-edit" /> COMPOSE</a>
      </div>
    </div>
    <div className="block">
      <div className="list-group border-bottom">
        <a href="#" className="list-group-item active"><span className="fa fa-inbox" /> Inbox <span className="badge badge-success">3</span></a>
        <a href="#" className="list-group-item"><span className="fa fa-star" /> Starred <span className="badge badge-warning">6</span></a>
        <a href="#" className="list-group-item"><span className="fa fa-rocket" /> Sent</a>
        <a href="#" className="list-group-item"><span className="fa fa-flag" /> Flagged</a>
        <a href="#" className="list-group-item"><span className="fa fa-trash-o" /> Deleted <span className="badge badge-default">1.4k</span></a>                            
      </div>                        
    </div>
    <div className="block">
      <h4>Labels</h4>
      <div className="list-group list-group-simple">                                
        <a href="#" className="list-group-item"><span className="fa fa-circle text-success" /> Clients</a>
      </div>
    </div>
  </div>
  {/* END CONTENT FRAME LEFT */}

  {/* START CONTENT FRAME BODY */}
  <div className="content-frame-body">
    <div className="panel panel-default">
      <div className="panel-heading">
        <label className="check mail-checkall">
          <input type="checkbox" className="icheckbox" />
        </label>
        <div className="btn-group">
          <button className="btn btn-default"><span className="fa fa-mail-reply" /></button>
          <button className="btn btn-default"><span className="fa fa-mail-reply-all" /></button>
          <button className="btn btn-default"><span className="fa fa-mail-forward" /></button>
        </div>
        <div className="btn-group">
          <button className="btn btn-default"><span className="fa fa-star" /></button>                                    
          <button className="btn btn-default"><span className="fa fa-flag" /></button>
        </div>                                
        <button className="btn btn-default"><span className="fa fa-warning" /></button>
        <button className="btn btn-default"><span className="fa fa-trash-o" /></button>                                                                    
        <div className="pull-right" style={{width: 150}}>
          <div className="input-group">
            <div className="input-group-addon"><span className="fa fa-calendar" /></div>
            <input className="form-control datepicker" type="text" data-orientation="left" />                                    
          </div>
        </div>
      </div>
      <div className="panel-body mail">
        <div className="mail-item mail-unread mail-info">                                    
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Dmitry Ivaniuk</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">Product development</a>                                    
          <div className="mail-date">Today, 11:21</div>
        </div>
        <div className="mail-item mail-unread mail-danger">                                    
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">John Doe</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">New Windows 9 App</a>                                    
          <div className="mail-date">Today, 10:36</div>
        </div>
        <div className="mail-item mail-success">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Nadia Ali</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">Check my new song</a>                                    
          <div className="mail-date">Yesterday, 20:19</div>
        </div>
        <div className="mail-item mail-warning">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star starred">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Brad Pitt</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">How are you? Need some work?</a>                                    
          <div className="mail-date">Sep 15</div>
        </div>
        <div className="mail-item mail-info">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Dmitry Ivaniuk</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">Can you check this docs?</a>                                    
          <div className="mail-date">Sep 14</div>
          <div className="mail-attachments">
            <span className="fa fa-paperclip" /> 11Kb
          </div>
        </div>
        <div className="mail-item">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star starred">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">HTC</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">New updates on your phone HD7</a>
          <div className="mail-date">Sep 13</div>
          <div className="mail-attachments">
            <span className="fa fa-paperclip" /> 58Mb
          </div>
        </div>
        <div className="mail-item mail-unread">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Unknown</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">You won $15,000,000</a>
          <div className="mail-date">Sep 13</div>
        </div>
        <div className="mail-item mail-success">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Nadia Ali</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">Your tickets</a>
          <div className="mail-date">Sep 11</div>
          <div className="mail-attachments">
            <span className="fa fa-paperclip" /> 1.2Mb
          </div>
        </div>
        <div className="mail-item mail-info">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Dmitry Ivaniuk</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">New bug founded</a>
          <div className="mail-date">Sep 11</div>
        </div>
        <div className="mail-item">
          <div className="mail-checkbox">
            <input type="checkbox" className="icheckbox" />
          </div>
          <div className="mail-star">
            <span className="fa fa-star-o" />
          </div>
          <div className="mail-user">Darth Vader</div>                                    
          <a href="pages-mailbox-message.html" className="mail-text">Where drawings of the new spaceship?</a>
          <div className="mail-date">Sep 10</div>
        </div>                                
      </div>
      <div className="panel-footer">                                
        <div className="btn-group">
          <button className="btn btn-default"><span className="fa fa-mail-reply" /></button>
          <button className="btn btn-default"><span className="fa fa-mail-reply-all" /></button>
          <button className="btn btn-default"><span className="fa fa-mail-forward" /></button>
        </div>
        <div className="btn-group">
          <button className="btn btn-default"><span className="fa fa-star" /></button>                                    
          <button className="btn btn-default"><span className="fa fa-flag" /></button>
        </div>
        <button className="btn btn-default"><span className="fa fa-warning" /></button>
        <button className="btn btn-default"><span className="fa fa-trash-o" /></button>                                    
        <ul className="pagination pagination-sm pull-right">
          <li className="disabled"><a href="#">«</a></li>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>                                    
          <li><a href="#">»</a></li>
        </ul>
      </div>                            
    </div>
  </div>
  {/* END CONTENT FRAME BODY */}

</div>
{/* END CONTENT FRAME */}

        </div>
    )
}