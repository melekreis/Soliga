<cfprocessingdirective pageencoding="utf-8">
<cfparam name="form.isim" default="">
<cfparam name="form.soyisim" default="">
<cfparam name="form.email" default="">
<cfparam name="form.telefon" default="">
<cfparam name="form.kategori" default="">
<cfparam name="form.yardım" default="">

<cfquery name="gelenTalepler" datasource="Soligadatabase">
    INSERT INTO Gelen_Talepler (Isim, Soyisim, Email, Telefon, Kategori, Yardım)
    VALUES (
        <cfqueryparam value="#form.isim#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.soyisim#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.email#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.telefon#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.kategori#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.yardım#" cfsqltype="cf_sql_varchar">
    )
</cfquery>

<cfif insertQuery.recordcount>
    <p>Kayıt başarıyla eklendi.</p>
<cfelse>
    <p>Kayıt eklenirken bir hata oluştu.</p>
</cfif>

