# add handlebars helpers and wiev implemented hbsHelpers (rename to authentication..)
<pre>
hbsHelpers.authorised          {{hbsHelpers.authorised}}
hbsHelpers.notAuthorised       {{hbsHelpers.unAuthorised}}
</pre>

{{#if hbsHelpers.authorised }}
    AUTHORISED
{{/if}}

{{#if hbsHelpers.unAuthorised }}
    UN-AUTHORISED
{{/if}}



    {{#if hbsHelpers.unAuthorised }}
    <div class="">
        Please <a href="/login">login</a> to post a review
    </div>
    {{else}}

    {{/if}}
