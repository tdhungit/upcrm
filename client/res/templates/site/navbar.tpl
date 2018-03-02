<div class="navbar navbar-inverse" role="navigation">
    <div class="navbar-header">
        <a class="navbar-brand nav-link" href="#"><img src="{{logoSrc}}" class="logo"><span class="home-icon glyphicon glyphicon-th-large" title="{{translate 'Home'}}"></span></a>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-body">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>

    <div class="collapse navbar-collapse navbar-body">
        <ul class="nav navbar-nav tabs">
            {{#each tabDefsList}}
            {{#unless isInMore}}
            <li data-name="{{name}}" class="not-in-more">
                <a href="{{link}}" class="nav-link">
                    {{#if ../../useIconNavbar}}
                        <i class="fa fa-circle-thin upicon-{{name}}"></i>
                    {{else}}
                        <span class="short-label" title="{{label}}">{{shortLabel}}</span>
                    {{/if}}
                    <span class="full-label">{{label}}</span>
                </a>
            </li>
            {{/unless}}
            {{/each}}
            <li class="dropdown more">
                <a id="nav-more-tabs-dropdown" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                    <i class="fa fa-plus-square"></i>
                    <span class="full-label">{{translate 'More'}}</span>
                </a>
                <ul class="dropdown-menu" role="menu" aria-labelledby="nav-more-tabs-dropdown">
                {{#each tabDefsList}}
                {{#if isInMore}}
                    <li data-name="{{name}}" class="in-more">
                        <a href="{{link}}" class="nav-link">
                            <i class="fa fa-circle-thin upicon-{{name}}"></i>
                            <span class="full-label">{{label}}</span>
                        </a>
                    </li>
                {{/if}}
                {{/each}}
                </ul>
            </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li class="nav navbar-nav navbar-form global-search-container">
                {{{globalSearch}}}
            </li>
            <li class="dropdown notifications-badge-container">
                {{{notificationsBadge}}}
            </li>
            {{#if enableQuickCreate}}
            <li class="dropdown hidden-xs quick-create-container">
                <a id="nav-quick-create-dropdown" class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-plus"></i></a>
                <ul class="dropdown-menu" role="menu" aria-labelledby="nav-quick-create-dropdown">
                    <li class="dropdown-header">{{translate 'Create'}}</li>
                    {{#each quickCreateList}}
                    <li>
                        <a href="#{{./this}}/create" data-name="{{./this}}" data-action="quick-create">
                            <i class="fa fa-circle-thin upicon-{{./this}}"></i>
                            {{translate this category='scopeNames'}}
                        </a>
                    </li>
                    {{/each}}
                </ul>
            </li>
            {{/if}}
            <li class="dropdown menu-container">
                <a id="nav-menu-dropdown" class="dropdown-toggle" data-toggle="dropdown" href="#" title="{{translate 'Menu'}}"><span class="glyphicon glyphicon-menu-hamburger"></span></a>
                <ul class="dropdown-menu" role="menu" aria-labelledby="nav-menu-dropdown">
                    <li><a href="#User/view/{{userId}}" class="nav-link">{{userName}}</a></li>
                    {{#each menu}}
                        {{#unless divider}}
                            <li>
                                <a href="{{#if link}}{{link}}{{else}}javascript:{{/if}}" class="nav-link{{#if action}} action{{/if}}"{{#if action}} data-action="{{action}}"{{/if}}>
                                    {{label}}
                                </a>
                            </li>
                        {{/unless}}
                    {{/each}}
                </ul>
            </li>
        </ul>
        <a class="minimizer" href="javascript:">
            <span class="fa fa-bars right"></span>
            <span class="fa fa-list left"></span>
        </a>
    </div>
</div>
