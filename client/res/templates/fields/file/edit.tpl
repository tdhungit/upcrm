<div class="attachment-upload">
    <div class="attachment-button{{#if id}} hidden{{/if}}">
        <div class="pull-left">
        <label class="attach-file-label" title="{{translate 'Attach File'}}">
            <span class="btn btn-default"><span class="glyphicon glyphicon-paperclip"></span></span>
            <input type="file" class="file pull-right" {{#if acceptAttribue}}accept="{{acceptAttribue}}"{{/if}}>
        </label>
        </div>
        {{#unless id}}
        {{#if sourceList.length}}
        <div class="pull-left dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                <span class="glyphicon glyphicon-file"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
            {{#each sourceList}}
                <li><a href="javascript:" class="action" data-action="insertFromSource" data-name="{{./this}}">{{translate this category='insertFromSourceLabels' scope='Attachment'}}</a></li>
            {{/each}}
            </ul>
        </div>
        {{/if}}
        {{/unless}}
    </div>

    <div class="attachment"></div>
</div>
